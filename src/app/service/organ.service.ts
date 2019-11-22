export class OrganService {
  organs = [
    {
      id: 1,
      name: 'heart',
      vital: 'yes',
      description: 'heart beat',
    }
    ];

  getColumns(): string[] {
    return ['name', 'vital', 'description']}
}
