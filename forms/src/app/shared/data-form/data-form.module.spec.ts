import { DataFormModule } from './data-form.module';

describe('DataFormModule', () => {
  let dataFormModule: DataFormModule;

  beforeEach(() => {
    dataFormModule = new DataFormModule();
  });

  it('should create an instance', () => {
    expect(dataFormModule).toBeTruthy();
  });
});
