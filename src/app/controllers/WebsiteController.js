class WebsiteController {
  async show(req, res) {
    const { users } = req;

    const websites = users.map(user => ({
      id: user.id,
      name: user.name,
      website: user.website,
    }));

    return res.json(websites);
  }
}

export default new WebsiteController();
