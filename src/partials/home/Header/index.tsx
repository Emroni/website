import Name from './Name';
import Photo from './Photo';

export default function Header() {

    return <header className="flex items-center justify-center py-6 xs:py-8 md:py-12 xl:py-16">
        <Photo/>
        <Name/>
    </header>;

}