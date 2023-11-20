import React, { FC } from 'react'
import { ISupportItem } from '@/components/ui/support-tem/support-item.interface'
import styles from './SupportItem.module.scss'

const SupportItem: FC<ISupportItem> = ({ summary, text }) => {
	return (
		<details className={styles.details}>
			<summary className={styles.title}>
				{summary}
			</summary>
			{text}
		</details>
	)
}

export default SupportItem
