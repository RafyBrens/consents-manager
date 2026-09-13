import { getCurrentUrl } from './historySelectors';

describe('Redux > consent > historySelector', () => {
  const state = {
    router: {
      location: { pathname: 'consents' },
    },
  };

  /* All selectors are very simple, since Redux selectors are pure functions */
  it('returns pathname ', () => {
    expect(getCurrentUrl(state)).toBe(state.router.location.pathname);
  });
});
