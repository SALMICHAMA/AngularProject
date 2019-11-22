export class OrganService {
  organs = [
    {
      id: 1,
      name: 'heart',
      vital: 'yes',
      description: 'heart beat',
    },
    {
      id: 2,
      name: 'lung',
      vital: 'yes',
      description: 'breathe',
    }
    ];

  getColumns(): string[] {
    return ['name', 'vital', 'description']}

  getOrganbyId(id: number) {
    const organs = this.organs.find(
      (s) => {
        return s.id === id;
      }
    );
    return organs
      ;
  }
}
