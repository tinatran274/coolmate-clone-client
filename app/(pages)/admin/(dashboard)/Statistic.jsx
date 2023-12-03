/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'
import React, { useState, useEffect } from 'react'
import './Statistic.scss'
import { Card } from './Card'

export default function SaleStatistic() {
  const [data, setData] = useState([])
  const [period, setPeriod] = useState('monthly')
  const [fetching, setFetching] = useState(true)
  useEffect(() => {
    setFetching(false)
    setData(
      period === 'daily'
        ? dataDaily
        : period === 'weekly'
        ? dataWeekly
        : dataMonthly
    )
  }, [period])
  const dataWeekly = [
    {
      total: '133010.9400',
      count: '69',
      time: 'Oct 28'
    },
    {
      total: '42051.2000',
      count: '54',
      time: 'Nov 04'
    },
    {
      total: '96977.3600',
      count: '76',
      time: 'Nov 11'
    },
    {
      total: '68282.2000',
      count: '64',
      time: 'Nov 18'
    },
    {
      total: '50121.7000',
      count: '43',
      time: 'Nov 25'
    },
    {
      total: '38161.4000',
      count: '42',
      time: 'Dec 02'
    }
  ]
  const dataMonthly = [
    {
      total: '536621.3200',
      count: '243',
      time: 'Jul 31'
    },
    {
      total: '427786.9800',
      count: '291',
      time: 'Aug 31'
    },
    {
      total: '1312308.6000',
      count: '364',
      time: 'Sep 30'
    },
    {
      total: '1491648.4600',
      count: '300',
      time: 'Oct 31'
    },
    {
      total: '275150.6600',
      count: '248',
      time: 'Nov 30'
    },
    {
      total: '8900.6000',
      count: '11',
      time: 'Dec 31'
    }
  ]
  const dataDaily = [
    {
      total: '6761.0000',
      count: '6',
      time: 'Nov 27'
    },
    {
      total: '5754.0000',
      count: '6',
      time: 'Nov 28'
    },
    {
      total: '7652.3000',
      count: '8',
      time: 'Nov 29'
    },
    {
      total: '2653.4000',
      count: '2',
      time: 'Nov 30'
    },
    {
      total: '3253.8000',
      count: '5',
      time: 'Dec 01'
    },
    {
      total: '5646.8000',
      count: '6',
      time: 'Dec 02'
    }
  ]
  // if (fetching) {
  //   return (
  //     <Card title="Sale Statistics">
  //       <div className="skeleton-wrapper-statistic">
  //         <div className="skeleton" />
  //       </div>
  //     </Card>
  //   )
  // } else {
  return (
    <Card
      title="Sale Statistics"
      actions={[
        {
          name: 'Daily',
          onAction: () => setPeriod('daily')
        },
        {
          name: 'Weekly',
          onAction: () => setPeriod('weekly')
        },
        {
          name: 'Monthly',
          onAction: () => setPeriod('monthly')
        }
      ]}
    >
      <Card.Session>
        {data.length === 0 ? null : (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: -25,
                bottom: 5
              }}
            >
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              {/* <Area
                type="monotone"
                dataKey="value"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              /> */}
              <Area
                type="monotone"
                dataKey="count"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Card.Session>
    </Card>
  )
}
// }
