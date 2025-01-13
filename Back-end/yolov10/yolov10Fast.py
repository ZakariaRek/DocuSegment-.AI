from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from ultralytics import YOLO
import supervision as sv
import base64
import io

app = FastAPI()

# Enable CORS for the frontend to make requests from different origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, adjust this if needed for security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Load the YOLOv10 model
model = YOLO('yolov10x_best.pt')

@app.post("/predict/")
async def predict(file: dict):  # Expecting a JSON object with the base64 string under the "file" key
    # Ensure the "file" key is in the input JSON
    if "file" not in file:
        raise HTTPException(status_code=400, detail="File field is missing in the request body")

    # Decode base64 string to bytes
    try:
        image_bytes = base64.b64decode(file["file"])
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid base64 string")

    # Convert bytes to numpy array for OpenCV
    nparr = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # Check if the image was properly decoded
    if image is None:
        raise HTTPException(status_code=400, detail="Failed to decode the image")

    # Run YOLO inference
    results = model(source=image, conf=0.2, iou=0.8)[0]

    # Convert results to supervision detections
    detections = sv.Detections.from_ultralytics(results)

    # Annotate the image with bounding boxes and labels
    bounding_box_annotator = sv.BoundingBoxAnnotator()
    label_annotator = sv.LabelAnnotator()

    annotated_image = bounding_box_annotator.annotate(
        scene=image, detections=detections)
    annotated_image = label_annotator.annotate(
        scene=annotated_image, detections=detections)

    # Encode the annotated image back to base64
    _, buffer = cv2.imencode('.jpg', annotated_image)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    # Return base64 encoded image as response
    return JSONResponse(content={"annotated_image": encoded_image})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("yolov10Fast:app", host="127.0.0.1", port=8000)
