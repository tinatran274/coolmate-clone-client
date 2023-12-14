/* eslint-disable camelcase */
'use client'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

import './Lifetimesales.scss'
import { Card } from './Card'
import Dot from './Dot'

const COLORS = ['#aee9d1', '#fed3d1', '#a4e8f2']
const RADIAN = Math.PI / 180
export default function LifetimeSale({ api }) {
  const data = {
    orders: 3634,
    total: '$102,420,193.60',
    completed_percentage: 57,
    cancelled_percentage: 32
  }
  const [fetching, setFetching] = React.useState(true)
  const { orders, total, completed_percentage, cancelled_percentage } = data

  const chartData = [
    { name: 'Completed', value: completed_percentage },
    { name: 'Cancelled', value: cancelled_percentage },
    {
      name: 'Others',
      value: 100 - completed_percentage - cancelled_percentage
    }
  ]
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    ...rests
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    console.log(
      '{ cx, cy, midAngle, innerRadius, outerRadius, percent, index }',
      { cx, cy, midAngle, innerRadius, outerRadius, percent, index, rests }
    )
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  //   if (window !== undefined) {
  //     fetch(api, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setData(json);
  //         setFetching(false);
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       });
  //   }
  // }, []);

  // if (fetching) {
  //   return (
  //     <Card title="Lifetime Sales">
  //       <Card.Session>
  //         <div className="skeleton-wrapper-lifetime">
  //           <div className="skeleton" />
  //           <div className="skeleton" />
  //           <div className="skeleton" />
  //           <div className="skeleton" />
  //         </div>
  //       </Card.Session>
  //       <Card.Session>
  //         <div className="skeleton-wrapper-lifetime">
  //           <div className="skeleton-chart" />
  //         </div>
  //       </Card.Session>
  //     </Card>
  //   );
  // } else {
  return (
    <div className="w-full h-full space-y-4">
      <Card title="Lifetime Sales">
        <Card.Session>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex space-x-2 items-center">
              <Dot color="#a4e8f2" />
              <div className="self-center text-sm">{orders} orders</div>
            </div>
            <div className="flex space-x-2 items-center">
              <Dot color="#a4e8f2" />
              <div className="self-center text-sm">{total} lifetime sale</div>
            </div>
            <div className="flex space-x-2 items-center">
              <Dot color="#aee9d1" />
              <div className="self-center text-sm">
                {completed_percentage}% of orders completed
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <Dot color="#fed3d1" />
              <div className="self-center text-sm">
                {cancelled_percentage}% of orders cancelled
              </div>
            </div>
          </div>
        </Card.Session>
      </Card>
      <Card>
        <Card.Session>
          <div style={{ height: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {
                    // eslint-disable-next-line react/no-array-index-key
                    chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))
                  }
                </Pie>
                <Tooltip labelStyle={{ fontSize: 14 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card.Session>
      </Card>
    </div>
  )
}
