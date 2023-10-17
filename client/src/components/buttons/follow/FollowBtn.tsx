import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followSomeone } from "../../../utils/otherFns";
import "./followBtn.css";
import { FormEvent } from "react";

const FollowBtn = ({ userID }: { userID: string }) => {
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: () => followSomeone(userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["followers"] });
    },
  });

  const handleFollow = (e: FormEvent) => {
    e.preventDefault();
    followMutation.mutate();
  };

  return (
    <button
      onClick={handleFollow}
      className="button"
      style={{ verticalAlign: "middle" }}
    >
      <span>Follow</span>
    </button>
  );
};

export default FollowBtn;
