import { AnimatePresence, motion } from 'framer-motion'

interface ModalProps {
    isOpen: boolean
    setIsOpen(value: boolean): void
}

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='overlay'
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 140, scaleX: 0.4 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        exit={{ opacity: 0, y: 140, scaleX: 0.2 }}
                        className='custom-dialog-container' // Custom container for animation
                    >
                        <dialog open={isOpen}>
                            <q>
                                I am so clever that sometimes I don't understand
                                a single word of what I am saying.
                            </q>{' '}
                            - <cite>Oscar Wilde</cite>
                            <br />
                            <button onClick={() => setIsOpen(false)}>
                                Close
                            </button>
                        </dialog>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
