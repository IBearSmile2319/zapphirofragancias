import React, { useEffect } from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import NavCombo from './NavCombo'
import './ProductsCombos.css'
import TableCombos from './TableCombos'

import { useDispatch, useSelector } from 'react-redux'
import { AllComboAdmin } from '../../../../action/combo.action'
import { Spin } from 'antd'
const ProductsCombo = () => {
  const dispatch = useDispatch()
  const { loading, listCombos, changeNumber } = useSelector(state => state.combo)

  useEffect(() => {
    dispatch(AllComboAdmin())
  }, [changeNumber])
  return (
    <Spin spinning={loading}>
      <main className='admin-combo__list'>
        <BreadCrumb />
        <NavCombo />
        <TableCombos
          data={listCombos && listCombos.length > 0 ? listCombos : []}
          className='table-combos'
        />
      </main>

    </Spin>
  )
}

export default ProductsCombo