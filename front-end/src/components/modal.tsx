import { ComponentProps, ReactNode, forwardRef } from "react";
import { tv } from "tailwind-variants";

const modalVariants = tv({
    base: 'w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5',

});

interface ModalProps extends ComponentProps<'div'> {
    children: ReactNode;
    variant?: 'primary';
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={modalVariants()}>
            {children}
        </div>
    );
});
