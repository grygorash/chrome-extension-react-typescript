import { FC, memo } from 'react';
import Button from 'antd/lib/button/button';

import WithTheme from 'hocs/WithTheme';

const App: FC = () =>
  <WithTheme>
    <div className="p-[20px] w-[300px]">
      <h1 className="text-primary-100 font-bold">CHROME EXT</h1>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
    </div>
  </WithTheme>;

export default memo(App);
