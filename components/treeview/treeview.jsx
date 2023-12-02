/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import TreeView, { flattenTree } from 'react-accessible-treeview'
import cx from 'classnames'
import './styles.css'
import { useRouter } from 'next/navigation'

const convertCategory = {
  name: '',
  children: [
    {
      name: 'Đồ thể thao',
      id: 1,
      children: [
        {
          name: 'Theo nhu cầu',
          children: null,
          id: 2
        },
        {
          name: 'Theo sản phẩm',
          id: 4,
          children: [
            {
              name: 'Quần short',
              children: null,
              id: 3
            }
          ]
        }
      ]
    },
    {
      name: 'Mặc hàng ngày',
      id: 5,
      children: [
        {
          name: 'Bộ sưu tập',
          id: 6,
          children: null
        },
        {
          name: 'Theo sản phẩm',
          id: 7,
          children: [
            {
              name: 'Quần short',
              id: 8,
              children: null
            },
            {
              name: 'Quần đùi',
              id: 9,
              children: null
            },
            {
              name: 'Quần dài',
              id: 15,
              children: null
            }
          ]
        }
      ]
    }
  ]
}
function Filtering({ categories, search = '' }) {
  const data = flattenTree(convertCategory)
  const router = useRouter()
  const [treeData, setTreeData] = useState(data)
  const filter = (value) => {
    const filtered = []
    const includeChildren = (id) => {
      data.forEach((item) => {
        if (item.parent === id) {
          if (!filtered.find((x) => x.id === item.id)) {
            filtered.push(item)
          }
          if (item.children.length) {
            includeChildren(item.id)
          }
        }
      })
    }
    data.forEach((item) => {
      if (item.id === 'ROOT') {
        return
      }
      if (item.name.includes(value.toUpperCase())) {
        if (!filtered.find((x) => x.id === item.id)) {
          filtered.push(item)
        }

        if (item.children.length) {
          includeChildren(item.id)
        }
      }
    })
    filtered.unshift(
      Object.assign({
        ...data[0],
        children: data[0].children.filter((id) =>
          filtered.find((fitem) => fitem.id === id)
        )
      })
    )
    setTreeData(filtered)
  }

  const filterNodesByText = (valueToFilter) => {
    if (!!valueToFilter) {
      filter(valueToFilter)
    } else {
      setTreeData(data)
    }
  }
  useEffect(() => {
    filterNodesByText(search)
  }, [search])
  const handleEditCategory = (event, element) => {
    event.stopPropagation()
    router.push(
      `/admin/edit-category/${element.id}?name=${element.name}&parent_category=${element.parent}`
    )
  }

  return (
    <div className="h-fit">
      {treeData.length === 1 ? (
        <div className="text-zinc-500/90 uppercase flex items-center justify-center h-screen">
          Not Found This!
        </div>
      ) : (
        <div className="filtered">
          <TreeView
            data={treeData}
            aria-label="Filtered tree"
            multiSelect
            propagateSelect
            propagateSelectUpwards
            togglableSelect
            nodeRenderer={({
              element,
              isBranch,
              isExpanded,
              getNodeProps,
              level,
              handleExpand
            }) => {
              return (
                <div
                  {...getNodeProps({ onClick: handleExpand })}
                  style={{ marginLeft: 40 * (level - 1) }}
                  className="hover:bg-accent w-fit rounded-md cursor-pointer px-2 py-1 hover:text-accent-foreground scale-90 hover:scale-100 group"
                >
                  <div className="flex items-center ">
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}

                    <span
                      className="text-[17px] font-normal group-hover:font-medium"
                      onClick={(e) => handleEditCategory(e, element)}
                    >
                      {element.name}
                    </span>
                  </div>
                </div>
              )
            }}
          />
        </div>
      )}
    </div>
  )
}

const ArrowIcon = ({ isOpen, className }) => {
  const baseClass = 'arrow'
  const classes = cx(
    baseClass,
    { [`${baseClass}--closed`]: !isOpen },
    { [`${baseClass}--open`]: isOpen },
    className
  )
  return <IoMdArrowDropright className={classes} />
}

export default Filtering
