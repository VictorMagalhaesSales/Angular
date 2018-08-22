import { TemplateFormModule } from './template-form.module';

describe('TemplateFormModule', () => {
  let templateFormModule: TemplateFormModule;

  beforeEach(() => {
    templateFormModule = new TemplateFormModule();
  });

  it('should create an instance', () => {
    expect(templateFormModule).toBeTruthy();
  });
});
