import ConstructorInjector from '../src/index'

class MockupClass {
  injectMeButWithValue: string = 'injectMe';
  injectMeButNoValue: boolean | undefined;
}

test('basic-injection', () => {
  const injectedClass = ConstructorInjector.inject(MockupClass, {
    injectMeButWithValue: 'injected',
    injectMeButNoValue: true,
  } as MockupClass);

  expect(injectedClass.injectMeButWithValue === 'injected')
  expect(injectedClass.injectMeButNoValue === true)
})

test('conditional-injection', () => {
  const injectedClass = ConstructorInjector.inject(MockupClass, {
    injectMeButWithValue: 'injected',
    injectMeButNoValue: true,
  } as MockupClass, true, false);

  expect(injectedClass.injectMeButWithValue === 'injectMe')
  expect(injectedClass.injectMeButNoValue === true)
})
