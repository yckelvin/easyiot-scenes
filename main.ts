microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    Mode = message
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(0, "Mode: " + Mode)
})
function curtainUp () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
    basic.pause(2000)
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    curtainIsUp = true
}
input.onButtonPressed(Button.A, function () {
    if (curtainIsUp) {
        microIoT.microIoT_clear()
        microIoT.microIoT_showUserText(0, "Curtain is up")
    } else {
        microIoT.microIoT_clear()
        microIoT.microIoT_showUserText(0, "Curtain is")
        microIoT.microIoT_showUserText(1, "moving up")
        curtainUp()
    }
})
function curtainDown () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 180)
    basic.pause(2000)
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    curtainIsUp = false
}
input.onButtonPressed(Button.B, function () {
    if (curtainIsUp) {
        microIoT.microIoT_clear()
        microIoT.microIoT_showUserText(0, "Curtain is")
        microIoT.microIoT_showUserText(1, "moving down")
        curtainDown()
    } else {
        microIoT.microIoT_clear()
        microIoT.microIoT_showUserText(0, "Curtain is down")
    }
})
let Mode = ""
let curtainIsUp = false
curtainIsUp = true
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
