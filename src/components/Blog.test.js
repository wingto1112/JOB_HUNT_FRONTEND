import { React, useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
let component
const mockHandler = jest.fn()
beforeEach(() => {

    const blog = {
        title: 'Testing Blog',
        author: 'Ben',
        url: 'test.com',
        like: 100
    }
    component = render(<Blog blog={blog} handleLike={mockHandler} />)
})
test('clicking likes', () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)
})
test('clicking the show button', () => {
    const button = component.getByText('view')
    fireEvent.click(button)
    const div = component.container.querySelector('.show')
    expect(div).not.toHaveStyle('display: none')
})

test('only renders title and author', () => {
    const div = component.container.querySelector('.blogTest')
    expect(div).toHaveTextContent('Ben')
    const div2 = component.container.querySelector('.show')
    expect(div2).toHaveStyle('display:none')
})