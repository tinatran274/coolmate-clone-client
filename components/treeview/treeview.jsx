/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { IoTrashBin } from 'react-icons/io5'
import { IoMdArrowDropright } from 'react-icons/io'
import TreeView, { flattenTree } from 'react-accessible-treeview'
import cx from 'classnames'
import './styles.css'

const countries = {
  name: '',
  children: [
    {
      name: 'AFGHANISTAN',
      currencyCode: '971',
      currencyName: 'AFGHANI',
      children: [
        {
          name: 'ALAND ISLasdjajshdANDS',
          currencyCode: '978',
          currencyName: 'EURO',
          children: [
            {
              name: 'ALAND ISLasdjajshdANDS',
              currencyCode: '978',
              currencyName: 'EURO'
            },
            {
              name: 'ALBAdhsajdhkNIA',
              currencyCode: '008',
              currencyName: 'LEK'
            }
          ]
        },
        {
          name: 'ALBAdhsajdhkNIA',
          currencyCode: '008',
          currencyName: 'LEK'
        }
      ]
    },
    {
      name: 'AFGHANISTAN',
      currencyCode: '971',
      currencyName: 'AFGHANI',
      children: [
        {
          name: 'ALAND ISLasdjajshdANDS',
          currencyCode: '978',
          currencyName: 'EURO',
          children: [
            {
              name: 'ALAND ISLasdjajshdANDS',
              currencyCode: '978',
              currencyName: 'EURO'
            },
            {
              name: 'ALBAdhsajdhkNIA',
              currencyCode: '008',
              currencyName: 'LEK'
            }
          ]
        },
        {
          name: 'ALBAdhsajdhkNIA',
          currencyCode: '008',
          currencyName: 'LEK'
        }
      ]
    },
    {
      name: 'ALAND ISLANDS',
      currencyCode: '978',
      currencyName: 'EURO'
    },
    {
      name: 'ALBANIA',
      currencyCode: '008',
      currencyName: 'LEK'
    }
  ]
}

function Filtering({ categories, search = '' }) {
  const data = flattenTree(countries)
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
                  <div
                    className="flex items-center "
                    onClick={() => console.log(element)}
                  >
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}

                    <span className="text-[17px] font-normal group-hover:font-medium">
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
