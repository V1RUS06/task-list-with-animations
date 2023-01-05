import * as React from 'react';
import {observer} from 'mobx-react';
import {Loader} from '@components/Loader';

export type SplashAnimatedStatusLiteral = 'init' | 'data' | 'home';

enum AnimatedStatus {
  Init = 'init',
  Data = 'data',
  Home = 'home',
  Finished = 'finished',
}

export const SplashLoader: React.FC = observer(() => {
  const [status, setStatus] = React.useState(AnimatedStatus.Init);

  React.useEffect(() => {
    setTimeout(() => {
      setStatus(AnimatedStatus.Finished);
    }, 3000);
  }, []);

  if (status !== AnimatedStatus.Finished) {
    return (
      <Loader
        onFinish={() => {
          setStatus(AnimatedStatus.Finished);
        }}
        animatedStatus={status as SplashAnimatedStatusLiteral}
      />
    );
  }
  return null;
});
