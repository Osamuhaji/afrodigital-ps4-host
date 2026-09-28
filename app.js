const firmware = document.getElementById("firmware");
const log = document.getElementById("log");
const status = document.getElementById("status");
const browser = document.getElementById("browser");

browser.textContent = navigator.userAgent.includes("PlayStation 4") ? "PS4 WebKit" : "Desktop / Other";

function write(message){
  log.textContent += "\n" + message;
  log.scrollTop = log.scrollHeight;
}

document.getElementById("prepare").addEventListener("click", () => {
  if(!firmware.value){
    status.textContent = "Select a firmware first.";
    write("[!] No firmware selected.");
    return;
  }

  status.textContent = `Prepared for firmware ${firmware.value}.`;
  write(`[+] Firmware selected: ${firmware.value}`);
  write("[+] Host UI is ready.");
  write("[i] Exploit module is intentionally not bundled in this starter build.");
});

document.getElementById("clear").addEventListener("click", () => {
  log.textContent = "Log cleared.";
  status.textContent = "Ready.";
});
