import React, { useState } from 'react'
import ModalDraggable from '../../../../../components/ModalDraggable'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { Button, Space } from 'antd'
import InputZF from '@components/InputZF'
import TextAreaZF from '@components/TextAreaZF'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { FormProductValidate } from './FormProduct.validate'
import { AddProductAdmin } from '../../../../../action/product.action'
import UploadZFMulti from '../../../../../components/UploadZFMulti'

const ModalFormProduct = ({
    open,
    handleOk,
    handleCancel,
}) => {
    const dispatch = useDispatch()
    const [fileList, setFileList] = useState([])
    const [dimentions, setDimentions] = useState([])
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(FormProductValidate)
    })
    const formItemsHidden = () => {
        setValue('name', '')
        setValue('description', '')
        setValue('price', '')
        setValue('stock', '')
        // setValue('category', '')
        // setValue('subcategory', '')
        // setValue('brand', '')
        setValue('competed', '')
        setValue('ofactoryFamily', '')
        setValue('dimension', [])
        setDimentions([])
        setFileList([])
    }
    const addItemDimention = () => {
        setValue("dimension", getValues("dimension") ? [...getValues("dimension"), {
            name: '',
            valor: '',
        }] : [{
            name: '',
            valor: ''
        }]
        )
        setDimentions([...dimentions, {
            name: '',
            valor: ''
        }])
    }
    const removeItemDimention = (index) => {
        const newDimension = [...getValues("dimension")]
        newDimension.splice(index, 1)
        setValue("dimension", newDimension)
        setDimentions([...newDimension])
    }
    const onSubmit = (data) => {
        const formData = new FormData()

        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        // formData.append('category', data.category)
        // formData.append('subcategory', data.subcategory)
        // formData.append('brand', data.brand)
        formData.append('competed', data.competed)
        formData.append('ofactoryFamily', data.ofactoryFamily)

        if (data.dimension && data.dimension.length > 0) {
            formData.append('dimension', JSON.stringify(data.dimension))
        }
        if (fileList.length > 0) {
            for (let file of fileList) {
                console.log(file)
                formData.append('productPicture', file.originFileObj)
            }
        }

        dispatch(AddProductAdmin(formData))

    }
    return (
        <ModalDraggable
            open={open}
            handleOk={handleOk}
            handleCancel={() => {
                formItemsHidden()
                handleCancel()
            }}
            footer={null}
            title="Añadir producto"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                >
                    <InputZF
                        label="Nombre del Producto"
                        name="name"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={true}
                        disabled={false}
                    />
                    <TextAreaZF
                        label="Descripción"
                        // labelClass="zf-label"
                        name="description"
                        register={register}
                        errors={errors}
                        required={false}
                    />
                    <InputZF
                        label="Precio del producto"
                        name="price"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={true}
                        disabled={false}
                    />
                    <InputZF
                        label="Cantidad del producto"
                        name="stock"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={true}
                        disabled={false}
                    />
                    <InputZF
                        label="Compitió"
                        name="competed"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={false}
                        disabled={false}
                    />
                    <InputZF
                        label="Familia olfativa"
                        name="ofactoryFamily"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={false}
                        disabled={false}
                    />
                    {/* title dimensiones */}
                    <h3>Dimensiones</h3>

                    {dimentions && dimentions.map((item, index) => <Space key={index} align="baseline" style={{ width: '100%', alignItems: 'center', height: '100%' }}>
                        <InputZF
                            label="name *"
                            name={`dimension[${index}].name`}
                            register={register}
                            placeholder=""
                            errors={errors}
                            type="text"
                            required={true}
                            disabled={false}
                        />
                        <InputZF
                            label="Valor *"
                            name={`dimension[${index}].valor`}
                            register={register}
                            placeholder=""
                            errors={errors}
                            type="text"
                            required={true}
                            disabled={false}
                        />
                        <MinusCircleOutlined
                            style={{
                                color: 'var(--primary-color)',
                                fontSize: '20px',
                                cursor: 'pointer',
                                marginTop: '20px',
                            }}
                            onClick={() => removeItemDimention(index)} />
                    </Space>
                    )}
                    <Button type="dashed" onClick={() => addItemDimention()} block icon={<PlusOutlined />}>
                        Añadir
                    </Button>
                    <h3>Imagenes del producto</h3>
                    <UploadZFMulti
                        fileList={fileList}
                        setFileList={setFileList}
                    />
                </Space>
                {/* <Modal visible={previewVisible} footer={null} onCancel={handlePreviewCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    <div>{previewTitle}</div>
                </Modal> */}
                {/* bottom */}
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginTop: '1rem'
                    }}
                >
                    enviar
                </Button>
            </form>
        </ModalDraggable >
    )
}

export default ModalFormProduct
