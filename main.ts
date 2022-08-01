microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    Mode = message
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(0, "Mode: " + Mode)
})
let Mode = ""
basic.showNumber(0)
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
basic.showNumber(1)
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
basic.showNumber(2)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
basic.showNumber(3)
basic.forever(function () {
    if (Mode == "sunny mode") {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.digitalWritePin(DigitalPin.P1, 0)
        if (true) {
        	
        }
    } else if (Mode == "rainy mode") {
    	
    } else if (Mode == "sleeping mode") {
    	
    } else if (Mode == "security mode") {
    	
    }
})
