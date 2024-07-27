const menu_items = (req, res, next) => {
  const items = new Map();
  items.set("Home", "/");
  items.set("About", "/about");
  items.set("Contacts", "/contact");
  res.locals.items = [...items.entries()].map(([key, value]) => ({
    key,
    value,
  }));
  next();
};

export default menu_items;
