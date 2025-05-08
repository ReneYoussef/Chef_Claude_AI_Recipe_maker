import cheflogo from '../assets/chef.png'

export default function Header() {

    return(
        <header className="header">
            <img src={cheflogo} alt="chef-icon" className="header-icon" />
            <span className="header-title">Chef Claude</span>
        </header>
    )
}