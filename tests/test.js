import ConstructorInjector from '../dist/index'

class MockupClass {}

/*
  Basically pure JS doesnt need to constructor injector
  unless class instance check is required in your project.
*/

test('basic-injection-js', () => {
  const injectedClass = ConstructorInjector.inject(MockupClass, {
    injectMeString: 'injected',
    injectMeBoolean: true,
  });

  expect(injectedClass.injectMeButWithValue === 'injected')
  expect(injectedClass.injectMeButNoValue === true)
})
