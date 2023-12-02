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

export default function SaleStatistic({ api }) {
  const [data, setData] = useState([])
  const [period, setPeriod] = useState('monthly')
  const [fetching, setFetching] = useState(true)

  if (fetching) {
    return (
      <Card title="Sale Statistics">
        <div className="skeleton-wrapper-statistic">
          <div className="skeleton" />
        </div>
      </Card>
    )
  } else {
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
                <Area
                  type="monotone"
                  dataKey="value"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
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
}