/**
 * @summary Users Controller.
 */

async function create(req, res) {
  try {
    return res.status(201).json("OK");
  } catch (e) {
    return res.status(500);
  }
}

export default create;
