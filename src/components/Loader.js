import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="50"
      width="50"
      ariaLabel="hourglass-loading"
      wrapperStyle={{ margin: 200 }}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  );
};
