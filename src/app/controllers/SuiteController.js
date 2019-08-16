class SuiteController {
  async show(req, res) {
    const { users } = req;

    const filteredUsers = users.filter(user => {
      return user.address.suite.includes('Suite' || 'suite');
    });

    return res.json(
      filteredUsers.map(user => ({
        id: user.id,
        name: user.name,
        address: user.address,
      }))
    );
  }
}
export default new SuiteController();
