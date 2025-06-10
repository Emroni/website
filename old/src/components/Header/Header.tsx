import HeaderName from '../HeaderName/HeaderName';
import HeaderPhoto from '../HeaderPhoto/HeaderPhoto';

export default function Header() {

    return <header className="flex items-center justify-center py-6 xs:py-8 md:py-12 xl:py-16">
        <HeaderPhoto />
        <HeaderName />
    </header>;

}