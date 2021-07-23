import { React, useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CreateBlog from './CreateBlog'

test('new blog form with right details', () => {
    const createBlog = jest.fn()

    const component = render(<CreateBlog createBlog={createBlog} />)
    const author = component.container.querySelector('#author')
    const title = component.container.querySelector('#title')
    const url = component.container.querySelector('#url')
    const form = component.container.querySelector('.form')
    fireEvent.change(author, {
        target: { value: 'Ben' }
    })
    fireEvent.change(title, {
        target: { value: 'testBlog' }
    })
    fireEvent.change(url, {
        target: { value: 'this.url' }
    })
    fireEvent.submit(form)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].title).toBe('testBlog')
    expect(createBlog.mock.calls[0][0].author).toBe('Ben')
    expect(createBlog.mock.calls[0][0].url).toBe('this.url')

})