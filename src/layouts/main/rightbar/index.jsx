import Premium from "./premium";
import Topics from "./topics";
import Search from "./search";
import WhoFolllow from "./who-follow";
import Footer from "./footer";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <WhoFolllow />
            <Footer />
        </aside>
    )
}