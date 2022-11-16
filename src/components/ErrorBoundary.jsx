import react from 'react'

class ErrorBoundary extends react.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    const { children, element } = this.props

    if (!react.isValidElement(element)) {
      throw new Error("Please fill 'element' prop with a valid component.")
    }

    if (this.state.error) return element
    return children
  }
}

export default ErrorBoundary
