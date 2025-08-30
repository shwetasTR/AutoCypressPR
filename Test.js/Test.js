function checkIn(user) {
  if (!user || !user.name) {
    throw new Error('User must have a name');
  }
  return `User ${user.name} checked in at ${new Date().toISOString()}`;
}

module.exports = checkIn;
const checkIn = require('../src/checkin');

describe('checkIn', () => {
  it('should return a check-in message for a valid user', () => {
    const user = { name: 'Alice' };
    const result = checkIn(user);
    expect(result).toMatch(/User Alice checked in at/);
  });

  it('should throw an error if user has no name', () => {
    expect(() => checkIn({})).toThrow('User must have a name');
  });

  it('should throw an error if user is not provided', () => {
    expect(() => checkIn()).toThrow('User must have a name');
  });
});