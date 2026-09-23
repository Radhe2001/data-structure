/*
 * input :
 * @param selector : selector to find given element
 * @param root : takes the root node on the selector will be applied
 * @param timeout : time duration for mutation observation on the root node
 *
 *
 * Logic :
 * step 1 : check if the element already exists in the dom
 * step 2 : observer the given root only for the given time period
 * step 3 : create mutation observer
 * step 4 : observe the mounting of the specified node in the give root
 *
 * output: if the node mounts in the given time period return the node else throw an error
 */
const waitForMounting = (selector, root = document, timeout = 10000) => {
  return new Promise((resolve, reject) => {
    const existingElement = root.querySelector(selector);

    if (existingElement) return resolve(existingElement);
    let observer;

    // implementing timeout
    const timeoutId = setTimeout(() => {
      observer?.disconnect();
      return reject(new Error(`Timeout occurred for ${selector}`));
    }, timeout);

    // mutation observer creation
    observer = new MutationObserver(() => {
      const element = root.querySelector(selector);
      if (element) {
        clearTimeout(timeoutId);
        observer.disconnect();
        return resolve(element);
      }
    });

    // observation
    observer.observe(root.body, {
      childList: true,
      subtree: true,
    });
  });
};

/*
 * input :
 * @param selector: used for selecting the element in the dom
 *
 * Logic : wait for the node to mount in the dom and perform click operation on the selected element node
 */
const implementButtonClick = async (selector) => {
  try {
    // waiting for the element to be mounted in the dom
    const element = await waitForMounting(selector);
    // perform click opeation on the desired button node
    element?.click();
  } catch (err) {
    console.log("Error encountered while button click:", err);
  }
};

// navigation through pages
await implementButtonClick('[id="selectRoomBtn0"] a');

// extracting prices
const element = await waitForMounting('[itemprop="offers"]');
const Base = element?.querySelector(
  '[id="room-rate-plan-price-id"]',
)?.innerText;
const Total = element?.querySelector(
  '[id="formatted-reservation-total-id"]',
)?.innerText;
console.log({ Base, Mandatory: null, Total });
