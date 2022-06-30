import React, { useEffect } from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import NavCombo from './NavCombo'
import './ProductsCombos.css'
import TableCombos from './TableCombos'

import { useDispatch, useSelector } from 'react-redux'
import { AllComboAdmin } from '../../../../action/combo.action'
import { Spin } from 'antd'
import {motion} from 'framer-motion'
const ProductsCombo = () => {
  const dispatch = useDispatch()
  const { loading, listCombos, changeNumber } = useSelector(state => state.combo)

  useEffect(() => {
    dispatch(AllComboAdmin())
  }, [changeNumber])
  return (
    <Spin spinning={loading}>
      <motion.main className='admin-combo__list'
         initial={{ width: 0}}
         animate={{ width: '100%', opacity: 1 }}
         exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <BreadCrumb />
        <NavCombo />
        <TableCombos
          data={listCombos && listCombos.length > 0 ? listCombos : []}
          className='table-combos'
        />
      </motion.main>

    </Spin>
  )
}

export default ProductsCombo