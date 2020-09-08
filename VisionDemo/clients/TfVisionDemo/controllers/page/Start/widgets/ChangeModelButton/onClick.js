	var model = client.getWidget("CurrentModel");
    if (model.text == 'coco-1.2') {
        model.text = 'yolo-1.0';
    } else if (model.text == 'yolo-1.0') {
        model.text = 'yolov3-1.0';
    } else {
        model.text = 'coco-1.2';
    }