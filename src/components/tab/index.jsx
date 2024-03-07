import Item from "../../components/tab/item"
import Items from "../../components/tab/items"
import Content from "../../components/tab/content"
import PropTypes from "prop-types"
import { TabContext } from "../../components/tab/context"
import { useEffect, useState } from "react"

export default function Tab({ children, activeTab }) {

    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])

    const contents = children.filter(c => c.type === Content) 
    const items = children.filter(c => c.type === Items)

    const content = contents.find(c => c.props.id === active)

    const data = {
        active,
        setActive
    }

    return (
        <TabContext.Provider value={data}>
            <div className="border-b border-[color:var(--background-third)] sticky top-[3.313rem] z-10 bg-black/[.65] backdrop-blur-md">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}