<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WithdrawResource extends JsonResource
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
            'jumlah_uang' => 'Rp ' . number_format($this->jumlah_uang, 2, ',', '.'),
            'jumlah_poin' => $this->jumlah_poin,
            'nama_bank' => $this->nama_bank,
            'no_rekening' => $this->no_rekening,
            'status' => $this->status,
            'created_at' => $this->created_at->format('d M Y'),
            'updated_at' => $this->updated_at->format('d M Y'),
        ];
    }
}
