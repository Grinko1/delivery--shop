import Information from 'shared/ui/Information';
import Navbar from 'shared/ui/Navbar';
import Search from 'widgets/Search';

const Header = () => {
  return (
    <header>
      <Information />
      <Search />
      <Navbar />
    </header>
  );
};

export default Header;
