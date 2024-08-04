import { NAVBAR_MENU_LINKS } from '@constants/index';

function Example() {
  return (
    <>
      <h1>Example</h1>
      {NAVBAR_MENU_LINKS.map((link) => link)}
    </>
  );
}

export default Example;
