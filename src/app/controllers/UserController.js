class UserController {
  async show(req, res) {
    const { users } = req;
    const { filter, order } = req.query;

    // order ascending by default
    let orderValue = 1;
    if (order === 'desc') {
      orderValue = -1;
    }

    // sort users based on filter value
    let sortedUsers = [];
    switch (filter) {
      case 'email': {
        sortedUsers = users.sort((a, b) =>
          a.email > b.email ? orderValue : orderValue * -1
        );
        break;
      }
      case 'company': {
        sortedUsers = users.sort((a, b) =>
          a.company.name > b.company.name ? orderValue : orderValue * -1
        );
        break;
      }
      // order by name by default
      default: {
        sortedUsers = users.sort((a, b) =>
          a.name > b.name ? orderValue : orderValue * -1
        );
      }
    }

    return res.json(
      sortedUsers.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company,
      }))
    );
  }
}

export default new UserController();
