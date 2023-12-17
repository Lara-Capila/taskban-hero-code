import { ReactNode } from "react";

const ModalRoot = ({
	isModalOpen,
	children,
}: {
	isModalOpen: boolean;
	children: ReactNode;
}) => {
	return (
		<>
			{isModalOpen && (
				<div
					className="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 min-w-[400px] max-w-2xl w-2/4">
								<div className="bg-white p-9">
									<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
										{children}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalRoot;
