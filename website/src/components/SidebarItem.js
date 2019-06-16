import React from "react"

const SidebarItem = ({ menuItem }) => {
  const { title, route } = menuItem
  return (
    <li>
      <details>
        <summary>{title}</summary>
      </details>
    </li>
  )
}

export default SidebarItem
