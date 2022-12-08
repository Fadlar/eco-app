<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TrashResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'weight' => $this->weight,
            'point' => $this->points_earned,
            'address' => $this->address,
            'start' => date('d M Y', strtotime($this->schedule_start)),
            'end' => date('d M Y H:i', strtotime($this->schedule_end)),
            'reply' => $this->reply === null ? null : $this->reply->description,
            'trash_type' => TrashTypeResource::collection($this->trashType),
            'created_at' => $this->created_at->format('d M Y'),
            'updated_at' => $this->updated_at->format('d M Y'),
        ];
    }
}
