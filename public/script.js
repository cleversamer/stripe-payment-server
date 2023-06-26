let disabled = false;
let timeouts = [];

document
  .getElementById("pay100")
  .addEventListener("click", getEventListener(100));
document
  .getElementById("pay250")
  .addEventListener("click", getEventListener(250));
document
  .getElementById("pay500")
  .addEventListener("click", getEventListener(500));
document
  .getElementById("pay1000")
  .addEventListener("click", getEventListener(1000));
document
  .getElementById("pay2500")
  .addEventListener("click", getEventListener(2500));
document
  .getElementById("pay5000")
  .addEventListener("click", getEventListener(5000));
document
  .getElementById("pay7500")
  .addEventListener("click", getEventListener(7500));
document
  .getElementById("pay10000")
  .addEventListener("click", getEventListener(10000));

function getEventListener(amount) {
  return (event) => {
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = "";
    if (disabled) {
      errorElement.innerHTML = "Please wait";
      return;
    }

    if (timeouts.length) {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    }

    disabled = true;

    fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => {
        const errorElement = document.getElementById("error");
        errorElement.innerHTML = err.message;

        let timeoutId = setTimeout(() => {
          errorElement.innerHTML = "";
        }, 10000);

        timeouts.push(timeoutId);
      })
      .finally(() => {
        let timeoutId = setTimeout(() => {
          disabled = false;
        }, 1000);

        timeouts.push(timeoutId);
      });
  };
}
