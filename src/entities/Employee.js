export  class Employee {
  constructor(data = {}) {
    this.name = data.name || '';
    this.email = data.email || '';
    this.gender = data.gender || '';
    this.department = data.department || '';
    this.isPermanent = data.isPermanent || false;
    this.skills = data.skills || [];
    this.joiningDate = data.joiningDate || '';
    this.profile = data.profile || null;
  }
}