const HID = require('node-hid');

/**
 * const { exec } = require('child_process');
 * const content = `device manufacturer: ${device.manufacturer} vendorId: ${device.vendorId} productId: ${device.productId} usagePage: ${device.usagePage} usage: ${device.usage}`
 * const params = `display notification "${content}" with title "测试标题"`
 * exec(`osascript -e '${params}'`, (error, stdout, stderr) => {});
 */

function sleep(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms))
}

async function findDevices(vendorId, productId, usagePage, usage) {
  let result = [];
  let devices = await HID.devicesAsync();
  for (const device of devices) {
    if (device.vendorId === vendorId && device.productId === productId &&
        device.usagePage === usagePage && device.usage === usage) {
      result.push(device);
    }
  }
  return result;
}

async function start() {
  // Redmi K30 (911, 4608) hex(0x038F, 0x1200)
  // Xbox Wireless Controller (1118, 2835) hex(0x045E, 0x0B13)
  const devices = await findDevices(1118, 2835, 1, 5);
  if (devices.length === 0) {
    return;
  }
  const info = devices[0]
  console.log(info);
  const device = await HID.HIDAsync.open(info.path);
  device.on("data", function(data) {
    console.log("data", data);
  });
  device.on("error", function(err) {
    console.log("error", err);
  });
  device.write([0x03, 0x01, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x02]);
  await sleep(10000);
  device.close();
}

start();
