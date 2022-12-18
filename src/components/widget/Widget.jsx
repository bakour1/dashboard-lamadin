import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget ( props ) {
  let data;

  //  temporary
  const amount = 100;
  const diff = 20;

  switch ( props.type ) {
    case 'user':
      data = {
        title: "USERS",
        isMony: false,
        link: 'See all Users',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={ { color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' } }
          />
        )
      };
      break;
    case 'order':
      data = {
        title: "ORDERS",
        isMony: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={ { color: 'goldenrod', backgroundColor: 'rgba(255,0,0,0.2)' } }
          />
        )
      };
      break;
    case 'earning':
      data = {
        title: "EARNINGS",
        isMony: false,
        link: 'See all earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={ { color: 'green', backgroundColor: ' rgba(0,218,0,0.2)' } }
          />
        )
      };
      break;
    case 'balance':
      data = {
        title: "BALANCES",
        isMony: false,
        link: 'See all balances',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={ { color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' } }
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">
          { data.isMony && '$' } { amount }
        </span>
        <span className="link">{ data.link }</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          { diff } %
        </div>
        { data.icon }
      </div>
    </div>
  );
}

export default Widget;
