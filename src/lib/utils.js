import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function findParents(tree, childId, currentPath = []) {
  for (const node of tree) {
    const path = [...currentPath, node.id]

    if (node.id === childId) {
      return path.filter((item) => item !== childId).map((item) => `${item}`)
    }

    if (node.children) {
      const result = findParents(node.children, childId, path)
      if (result) {
        return result
      }
    }
  }
  return null
}

export function isPasswordValid(password) {
  // Regex pattern for password validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{9,}$/

  // Test the password against the pattern
  return passwordPattern.test(password)
}

export function getkeyByValue(object, value, type) {
  return type === 'tinhtp'
    ? Object.keys(object).find((key) => object[key].name === value)
    : Object.keys(object).find((key) => object[key].name_with_type === value)
}

export const getAllCategoryNames = (category) => {
  let categoryNames = ''
  let currentCategory = category
  while (currentCategory) {
    if (currentCategory.parent_category) {
      categoryNames += currentCategory.category_name + ' - '
    } else {
      categoryNames += currentCategory.category_name
    }
    currentCategory = currentCategory.parent_category
  }
  return categoryNames
}
